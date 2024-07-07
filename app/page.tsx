import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function Home() {
  return (
    <main>
      <div className="bg-background min-h-[540px] py-24  overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="text-primary uppercase text-xs font-bold tracking-[3px] mb-4 block">
              Easily land your next big gig
            </span>
            <h1 className="text-[3.8rem] font-semibold tracking-tight leading-[4rem] mb-6">
              Get paid for what you love, really.
            </h1>
            <p className="w-[85%]">
              PixaJobs helps you find your next freelance job faster. Because,
              life is too short waste working on things you don&apos;t care
              about. Join today and start hunting for your next thing.
            </p>
            <Link
              href="/login"
              className="btn btn-primary text-white font-bold px-8 mt-8">
              Get Started <RiArrowRightUpLine className="text-lg" />
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/hero.jpg"
              alt="Woman working on a laptop"
              width={750}
              height={650}
              className="absolute -bottom-[108px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container relative -top-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow p-8">
            <span className="text-primary uppercase text-xs font-bold tracking-[3px] block mb-2">
              Step One
            </span>
            <h2 className="font-semibold text-xl">Create a PixaJob account</h2>
            <p className="text-gray-500 mt-3 leading-relaxed">
              Use your existing Goggle account to sign up for PixaJobs.
              It&apos;s easy and hasslefree. Oh, did we mention no cards
              required?
            </p>
          </div>
          <div className="bg-white shadow p-8">
            <span className="text-primary uppercase text-xs font-bold tracking-[3px] block mb-2">
              Step Two
            </span>
            <h2 className="font-semibold text-xl">Set up profile</h2>
            <p className="text-gray-500 mt-3 leading-relaxed">
              Tell the world what you do and what you&apos;re good at. List out
              your strengths and experiences. Let your profile shine.
            </p>
          </div>
          <div className="bg-white shadow p-8">
            <span className="text-primary uppercase text-xs font-bold tracking-[3px] block mb-2">
              Step Three
            </span>
            <h2 className="font-semibold text-xl">Find your next gig</h2>
            <p className="text-gray-500 mt-3 leading-relaxed">
              Browse throgh our catalog of high-quality, handpicked listings. No
              B.S. No filters.
            </p>
          </div>
        </div>
      </div>
      <div className="my-24 container px-0 md:px-48">
        <p className="text-primary uppercase text-xs font-bold text-center tracking-[3px] mb-3">
          Got Questions?
        </p>
        <h2 className="text-3xl font-bold text-center mb-14">
          Frequently Asked Questions
        </h2>
        <div className="collapse bg-gray-100 mb-2">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-lg font-semibold">
            What&apos;s PixaJobs all about?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Sure, here&apos;s some fun and casual FAQ content for PixaJobs:
              PixaJobs FAQ What&apos;s PixaJobs all about? PixaJobs is your
              go-to spot for finding freelance gigs and hiring top-notch talent.
              Whether you&apos;re a designer, developer, writer, or anything in
              between, we&apos;ve got the perfect job for you. Think of us as
              the matchmakers of the freelance world!
            </p>
          </div>
        </div>
        <div className="collapse bg-gray-100 mb-2">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-lg font-semibold">
            Is PixaJobs free to use?
          </div>
          <div className="collapse-content">
            <p>
              Yep, it&apos;s totally free to join and create a profile. We do
              offer some sweet premium features to give your profile a little
              extra sparkle, but the basics are all on us.
            </p>
          </div>
        </div>
        <div className="collapse bg-gray-100 mb-2">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-lg font-semibold">
            How do I sign up?
          </div>
          <div className="collapse-content">
            <p>
              Easy peasy! Just click that shiny Get started button on the top
              right corner, use your Google account, and you&apos;re in! Welcome
              to the PixaJobs fam!
            </p>
          </div>
        </div>
        <div className="collapse bg-gray-100 mb-2">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-lg font-semibold">
            Do you have any tips for getting hired?
          </div>
          <div className="collapse-content">
            <p>
              Oh, do we ever! Make sure your profile is looking sharp—great
              photo, detailed bio, and a killer portfolio. Apply to jobs that
              match your skills, and don&apos;t be afraid to sell yourself in
              the cover letter. You got this!
            </p>
          </div>
        </div>
        <div className="collapse bg-gray-100 mb-2">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-lg font-semibold">
            Can I share my PixaJobs success story?
          </div>
          <div className="collapse-content">
            <p>
              We&apos;d love that! Share your story on social media with the
              hashtag #PixaJobsSuccess, and we might just feature you on our
              website. Go on, brag a little!
            </p>
          </div>
        </div>
        <div className="collapse bg-gray-100 mb-2">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-lg font-semibold">
            How do I contact support?
          </div>
          <div className="collapse-content">
            <p>
              Need help? Our support team is just a click away. Head to the
              Contact Us page, shoot us a message, and we&apos;ll get back to
              you ASAP.
            </p>
          </div>
        </div>
      </div>
      <footer className="container mt-12 border-t border-gray-200 py-8">
        <div className="flex items-center justify-between">
          <Image src="/logo.svg" alt="PixaJobs" width={36} height={36} />
          <div className="text-sm flex space-x-2 text-gray-500 font-medium">
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
