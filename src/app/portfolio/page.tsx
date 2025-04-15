import { ProjectCard } from '@/components/project/ProjectCard';

export default function PortfolioPage() {
  return (
    <main className="m-auto bg-black/10 p-4 flex flex-col gap-10">
      {/* <p className="text-center">안녕하세요, 이소연입니다.</p> */}

      <section className="min-h-screen flex items-center m-auto">
        {/* <h1 className="bg-black/20 text-2xl">Intro</h1> */}
        <p className="text-3xl max-w-4xl md:text-5xl">
          안녕하세요. <br />더 나은 내일을 꿈꾸며 행동하는 <br />
          Frontend Developer{' '}
          <span className="font-black tracking-wide">이소연</span>입니다.
        </p>
      </section>
      <section className="min-h-screen">
        <h1 className="bg-black/20 text-3xl">Projects</h1>

        <ProjectCard />
      </section>
      <section>
        <h1 className="bg-black/20 text-3xl">Education</h1>
      </section>
    </main>
  );
}
