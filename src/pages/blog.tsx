import { useEffect } from "react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

interface Model3D {
  id: string;
  title: string;
  embedUrl: string;
}

const models: Model3D[] = [
  {
    id: "coffee-cup",
    title: "Coffee Cup",
    embedUrl:
      "https://sketchfab.com/models/f1ff5966185b4bc6aee2345097eab105/embed",
  },
  // Add more models here as needed
];

export default function BlogPage() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://static.sketchfab.com/js/embed-sdk-v1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Blog</h1>
        </div>
        <div className="w-full max-w-4xl mt-8">
          {models.map((model) => (
            <div key={model.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Featured 3D Model: {model.title}
              </h2>
              <div className="sketchfab-embed-wrapper">
                <div className="h-[600px]">
                  <iframe
                    allowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    className="w-full h-full"
                    frameBorder="0"
                    src={model.embedUrl}
                    title={model.title}
                    {...({
                      mozallowfullscreen: "true",
                      webkitallowfullscreen: "true",
                    } as any)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New 3D model: Charging Rack */}
        <div className="sketchfab-embed-wrapper w-full max-w-4xl">
          <iframe
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            frameBorder="0"
            src="https://sketchfab.com/models/4fa4c1db72cc47a7b99a4f12a196298b/embed?autostart=1&preload=1&ui_theme=dark"
            style={{ width: "100%", height: "400px" }}
            title="Charging Rack1 V1.4"
            {...({
              mozallowfullscreen: "true",
              webkitallowfullscreen: "true",
              "data-xr-spatial-tracking": "",
              "data-execution-while-out-of-viewport": "",
              "data-execution-while-not-rendered": "",
              "data-web-share": "",
            } as any)}
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: "normal",
              margin: "5px",
              color: "#4A4A4A",
            }}
          >
            <a
              href="https://sketchfab.com/3d-models/charging-rack1-v14-4fa4c1db72cc47a7b99a4f12a196298b?utm_medium=embed&utm_campaign=share-popup&utm_content=4fa4c1db72cc47a7b99a4f12a196298b"
              rel="nofollow noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
              target="_blank"
            >
              Charging Rack1 V1.4
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/marcocronje?utm_medium=embed&utm_campaign=share-popup&utm_content=4fa4c1db72cc47a7b99a4f12a196298b"
              rel="nofollow noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
              target="_blank"
            >
              Marco Cronje
            </a>{" "}
            on{" "}
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4fa4c1db72cc47a7b99a4f12a196298b"
              rel="nofollow noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
              target="_blank"
            >
              Sketchfab
            </a>
          </p>
        </div>

        {/* You can add more blog content here */}
      </section>
    </DefaultLayout>
  );
}
