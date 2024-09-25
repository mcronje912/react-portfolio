import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Code } from "@nextui-org/code";
import { Snippet } from "@nextui-org/snippet";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Slider} from "@nextui-org/slider";
import {Accordion, AccordionItem} from "@nextui-org/accordion";


export default function DocsPage() {


  const defaultContent =
  "Looooooorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const defaultContent2 =
  "Dooooooos   Looooooorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Docs</h1>
        </div>
        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx..</Code>
            </span>

            <p>test</p>           
          </Snippet>
        </div>
      </section>
      <Card>
      <CardBody className="mt-40">
        <p>This is the documents page.</p>
      </CardBody >
    </Card>
    <section className="flex flex-col items-center justify-center gap-4 py-30 md:py-40">
    <Card>
    <div>
    <Slider 
      className="inline-block text-center justify-center"
      label="Temperature" 
      step={1} 
      maxValue={10} 
      minValue={0} 
      defaultValue={5}
    />
    </div>
    </Card>
    </section>
xxx


    <div className="mt-20">
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        subtitle={
          <span>
            Press to expand my boet<strong>key 2</strong>
          </span>
        }
        title="Accordion 2"
      >
        {defaultContent2}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 33">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>



    </DefaultLayout>
  );
}
