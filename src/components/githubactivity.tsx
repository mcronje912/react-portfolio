import { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

interface LanguageData {
  name: string;
  value: number;
}

interface CommitData {
  name: string;
  value: number;
}

interface GithubEvent {
  type: string;
  created_at: string;
  payload: {
    commits: unknown[];
  };
}

interface GithubRepo {
  language: string | null;
}

const GitHubActivity = () => {
  const [languageData, setLanguageData] = useState<LanguageData[]>([]);
  const [commitData, setCommitData] = useState<CommitData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch language data
        const languageResponse = await axios.get<GithubRepo[]>(
          "https://api.github.com/users/mcronje912/repos"
        );
        const languages = languageResponse.data.reduce((acc: Record<string, number>, repo) => {
          if (repo.language) {
            acc[repo.language] = (acc[repo.language] || 0) + 1;
          }
          return acc;
        }, {});
        const languageChartData: LanguageData[] = Object.entries(languages).map(
          ([name, value]) => ({ name, value })
        );
        setLanguageData(languageChartData);

        // Fetch commit data
        const commitResponse = await axios.get<GithubEvent[]>(
          "https://api.github.com/users/mcronje912/events"
        );
        const lastSixMonths = new Date();
        lastSixMonths.setMonth(lastSixMonths.getMonth() - 6);
        const commitCounts = commitResponse.data
          .filter(
            (event) =>
              event.type === "PushEvent" &&
              new Date(event.created_at) > lastSixMonths
          )
          .reduce((acc: Record<string, number>, event) => {
            const date = new Date(event.created_at).toLocaleDateString(
              "en-US",
              { month: "short" }
            );
            acc[date] = (acc[date] || 0) + event.payload.commits.length;
            return acc;
          }, {});
        const commitChartData: CommitData[] = Object.entries(commitCounts).map(
          ([name, value]) => ({ name, value })
        );
        setCommitData(commitChartData);

        setLoading(false);
      } catch (error) {
        setError("Error fetching GitHub data. Please try again later.");
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) return <p>Loading GitHub activity...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <h4 className="text-md font-semibold">Language Distribution</h4>
        </CardHeader>
        <CardBody>
          <ResponsiveContainer height={200} width="100%">
            <BarChart data={languageData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h4 className="text-md font-semibold">
            Commit Activity (Last 6 Months)
          </h4>
        </CardHeader>
        <CardBody>
          <ResponsiveContainer height={200} width="100%">
            <BarChart data={commitData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default GitHubActivity;