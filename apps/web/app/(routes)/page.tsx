import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Container, ContainerContent } from "@repo/ui/components/ui/container";
import { Heading } from "@repo/ui/components/ui/heading";
import { Paragraph } from "@repo/ui/components/ui/paragraph";
import type { Metadata } from "next";
import Image from "next/image";
import { TbExternalLink, TbFileCode } from "react-icons/tb";
import { metaTitleGenerator } from "../../utils/metaTitleGenerator";

export const metadata: Metadata = {
  title: metaTitleGenerator("beluga stack no.1"),
  description: "",
};

function Home(): JSX.Element {
  return (
    <>
      <Container>
        <ContainerContent
          area="small"
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image
            alt="beluga Logo"
            className="h-24 w-auto"
            height={223}
            priority
            src="/beluga_logo_signet.svg"
            width={900}
          />
          <Heading className="text-primary" level={1} size="xl">
            beluga stack – <span className="font-bold">no.1</span>
          </Heading>
        </ContainerContent>
      </Container>
      <Container>
        <ContainerContent>
          <Paragraph align="center" className="font-bold" font="mono" size="sm">
            This stack includes:
          </Paragraph>
        </ContainerContent>
        <ContainerContent className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
          <Card className="border-primary">
            <CardHeader>
              <CardTitle level={3}>NextJS 14</CardTitle>
              <CardDescription>
                with app-router and server-actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Used by some of the world's largest companies, Next.js enables
                you to create high-quality web applications with the power of
                React components.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://nextjs.org/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://nextjs.org/docs" target="_blank">
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>Postgres</CardTitle>
              <CardDescription>database with Docker</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                The PostgreSQL object-relational database system provides
                reliability and data integrity.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://www.postgresql.org/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://hub.docker.com/_/postgres" target="_blank">
                  <TbFileCode className="w-4 h-4" />
                  Docker Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>Prisma</CardTitle>
              <CardDescription>ORM</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Prisma provides the best experience to interact with databases.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://www.prisma.io/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.prisma.io/docs/getting-started"
                  target="_blank"
                >
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>React Query</CardTitle>
              <CardDescription>asynchronous state management</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Toss out that granular state management, manual refetching and
                endless bowls of async-spaghetti code. TanStack Query gives you
                declarative, always-up-to-date auto-managed queries and
                mutations.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://tanstack.com/query/latest" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://tanstack.com/query/latest/docs/framework/react/overview"
                  target="_blank"
                >
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>Next-Safe-Actions</CardTitle>
              <CardDescription>
                typesafe server-actions inside client components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                next-safe-action is a library that takes full advantage of the
                latest and greatest Next.js, React and TypeScript features,
                using validation libraries of your choice, to let you define
                typesafe Server Actions and execute them inside Client
                Components.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://next-safe-action.dev/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://next-safe-action.dev/docs/introduction"
                  target="_blank"
                >
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>Lucia</CardTitle>
              <CardDescription>Authentication</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Lucia is an auth library for your server that abstracts away the
                complexity of handling sessions. It works alongside your
                database to provide an API that's easy to use, understand, and
                extend.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://lucia-auth.com/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://lucia-auth.com/" target="_blank">
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>Tailwind</CardTitle>
              <CardDescription>utility-first CSS framework</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                A utility-first CSS framework packed with classes like flex,
                pt-4, text-center and rotate-90 that can be composed to build
                any design, directly in your markup.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://tailwindcss.com/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://tailwindcss.com/docs/installation"
                  target="_blank"
                >
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>Shadcn</CardTitle>
              <CardDescription>Beautifully designed components</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Beautifully designed components that you can copy and paste into
                your apps. Accessible. Customizable. Open Source.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://ui.shadcn.com/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://ui.shadcn.com/docs" target="_blank">
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>zod</CardTitle>
              <CardDescription>
                TypeScript-first schema declaration and validation library
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Zod is a TypeScript-first schema declaration and validation
                library. I'm using the term "schema" to broadly refer to any
                data type, from a simple string to a complex nested object.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://zod.dev/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://zod.dev/" target="_blank">
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>React-Hook-Forms</CardTitle>
              <CardDescription>
                Performant, flexible and extensible forms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Performant, flexible and extensible forms with easy-to-use
                validation.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://react-hook-form.com/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://react-hook-form.com/get-started"
                  target="_blank"
                >
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>Moment.js</CardTitle>
              <CardDescription>dates and times</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Parse, validate, manipulate, and display dates and times.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://react-hook-form.com/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://react-hook-form.com/get-started"
                  target="_blank"
                >
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>React Icons</CardTitle>
              <CardDescription>Include popular icons</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Include popular icons in your React projects easily with
                react-icons, which utilizes ES6 imports that allows you to
                include only the icons that your project is using.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a
                  href="https://react-icons.github.io/react-icons/"
                  target="_blank"
                >
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://react-icons.github.io/react-icons/"
                  target="_blank"
                >
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle level={3}>Fontsource</CardTitle>
              <CardDescription>
                collection of open-source fonts for self-hosting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Fontsource is a collection of open-source fonts that are
                packaged into individual NPM packages for self-hosting in your
                web applications.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://fontsource.org/" target="_blank">
                  <TbExternalLink className="w-4 h-4" />
                  Visit
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://fontsource.org/docs/getting-started/introduction"
                  target="_blank"
                >
                  <TbFileCode className="w-4 h-4" />
                  Docs
                </a>
              </Button>
            </CardFooter>
          </Card>
        </ContainerContent>
      </Container>
    </>
  );
}

export default Home;
