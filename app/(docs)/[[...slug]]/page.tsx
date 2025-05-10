import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  EditOnGitHub,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { PenBoxIcon } from 'lucide-react';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="flex md:flex-row flex-col md:items-center gap-3 justify-between">
        <DocsTitle className="truncate">{page.data.title}</DocsTitle>
        <div>
          <EditOnGitHub href={`https://github.com/zhaoworks/opendocs/edit/main/content/docs/${page.file.path}`}>
            <PenBoxIcon size={14} />
            <span>Editar no GitHub</span>
          </EditOnGitHub>
        </div>
      </div>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
