import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Progress } from "@nextui-org/react";

interface LanguageData {
  name: string;
  value: number;
  percentage: number;
}

interface Repo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  private: boolean;
}

const colorSchemes = {
  vibrant: [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFA07A",
    "#98D8C8",
    "#F06EC4",
    "#C3FF68",
    "#FFD700",
    "#20B2AA",
    "#FF69B4",
    "#7FFFD4",
  ],
  pastel: [
    "#FFB3BA",
    "#BAFFC9",
    "#BAE1FF",
    "#FFFFBA",
    "#FFDFBA",
    "#E0BBE4",
    "#D4F0F0",
    "#FFC6FF",
    "#BDB2FF",
    "#A0C4FF",
    "#CAFFBF",
  ],
  cool: [
    "#34495E",
    "#2980B9",
    "#1ABC9C",
    "#27AE60",
    "#8E44AD",
    "#2C3E50",
    "#3498DB",
    "#16A085",
    "#2ECC71",
    "#9B59B6",
    "#2980B9",
  ],
};

const COLORS = colorSchemes.vibrant;
const MAX_LANGUAGES = 11;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || "";

const GitHubActivity: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [languageData, setLanguageData] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      if (!GITHUB_TOKEN) {
        setError(
          "GitHub token is not set. Please check your environment variables.",
        );
        setLoading(false);

        return;
      }

      try {
        const githubApi = axios.create({
          baseURL: "https://api.github.com",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        });

        const repoResponse = await githubApi.get<Repo[]>(
          "/user/repos?sort=created&direction=desc",
        );

        setRepos(repoResponse.data.slice(0, 5));

        const languagesPromises = repoResponse.data.map((repo) =>
          githubApi.get(`/repos/${repo.full_name}/languages`),
        );
        const languagesResponses = await Promise.all(languagesPromises);

        const languageCounts: Record<string, number> = {};
        let totalBytes = 0;

        languagesResponses.forEach((response) => {
          Object.entries(response.data).forEach(([lang, bytes]) => {
            languageCounts[lang] =
              (languageCounts[lang] || 0) + (bytes as number);
            totalBytes += bytes as number;
          });
        });

        let languageChartData = Object.entries(languageCounts)
          .map(([name, value]) => ({
            name,
            value,
            percentage: (value / totalBytes) * 100,
          }))
          .sort((a, b) => b.percentage - a.percentage);

        if (languageChartData.length > MAX_LANGUAGES) {
          const topLanguages = languageChartData.slice(0, MAX_LANGUAGES - 1);
          const otherLanguages = languageChartData.slice(MAX_LANGUAGES - 1);
          const otherPercentage = otherLanguages.reduce(
            (sum, lang) => sum + lang.percentage,
            0,
          );
          const otherValue = otherLanguages.reduce(
            (sum, lang) => sum + lang.value,
            0,
          );

          topLanguages.push({
            name: "Others",
            value: otherValue,
            percentage: otherPercentage,
          });

          languageChartData = topLanguages;
        }

        setLanguageData(languageChartData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setError("Failed to fetch GitHub data. Please try again later.");
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading)
    return (
      <>
        <p>Loading GitHub activity...</p>
        <Progress
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
          size="lg"
        />
      </>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Card className="bg-opacity-20 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 md:w-1/3">
        <CardHeader>
          <h4 className="text-md font-semibold">Recent Repositories</h4>
        </CardHeader>
        <CardBody className="py-2 px-4">
          <ul className="list-disc list-inside">
            {repos.map((repo) => (
              <li key={repo.id} className="mb-2">
                <a
                  className="text-primary hover:underline"
                  href={repo.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {repo.name} {repo.private ? "(Private)" : ""}
                </a>
                {repo.description && (
                  <p className="ml-4 text-sm text-mountbatten-pink">
                    {repo.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
      <Card className="bg-opacity-20 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 md:w-2/3">
        <CardHeader>
          <h4 className="text-md font-semibold">Language Distribution</h4>
        </CardHeader>
        <CardBody className="py-2 px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <ResponsiveContainer height={250} width="100%">
                <PieChart>
                  <Pie
                    cx="50%"
                    cy="50%"
                    data={languageData}
                    dataKey="value"
                    fill="#8884d8"
                    labelLine={false}
                    outerRadius={100}
                  >
                    {languageData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>d
                  <Tooltip
                    formatter={(_value, name, props) => [
                      `${props.payload.percentage.toFixed(2)}%`,
                      name,
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div className="grid grid-cols-2 gap-2">
                {languageData.map((entry, index) => (
                  <div key={`legend-${index}`} className="flex items-center">
                    <div
                      className="w-3 h-3 mr-2"
                      style={{
                        backgroundColor: COLORS[index % COLORS.length],
                      }}
                    />
                    <span className="text-sm">
                      {entry.name}: {entry.percentage.toFixed(2)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default GitHubActivity;
