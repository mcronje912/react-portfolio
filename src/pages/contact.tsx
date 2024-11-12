import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input, Textarea, Button } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "service_cgcy3xv",
        "template_9egp519",
        formData,
        "b3S5dSqsBJsINPdib"
      );

      if (result.text === "OK") {
        setStatus("Message sent successfully!");
        setFormData({ from_name: "", reply_to: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center py-8 px-4 min-h-[80vh]">
        <h1
          className="font-silkscreen text-center text-5xl bg-gradient-to-r from-delft-blue to-turquoise bg-clip-text text-transparent dark:from-turquoise dark:to-magnolia mb-8"
          style={{ fontFamily: "Silkscreen" }}
        >
          Get in touch
        </h1>
        <Card className="max-w-lg w-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Send me a message</p>
            </div>
          </CardHeader>
          <CardBody>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input
                isRequired
                label="Name"
                name="from_name"
                placeholder="Enter your name"
                value={formData.from_name}
                onChange={handleChange}
              />
              <Input
                isRequired
                label="Email"
                name="reply_to"
                placeholder="Enter your email"
                type="email"
                value={formData.reply_to}
                onChange={handleChange}
              />
              <Textarea
                isRequired
                label="Message"
                minRows={4}
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                className="mt-4"
                color="primary"
                isLoading={isLoading}
                type="submit"
              >
                Send Message
              </Button>
              {status && (
                <p
                  className={`text-center mt-2 ${
                    status.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </CardBody>
        </Card>
      </div>
    </DefaultLayout>
  );
}