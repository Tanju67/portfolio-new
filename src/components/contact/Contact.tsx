import Button from "../../shared/UIElements/button/Button";
import TextLayout from "../../shared/UIElements/textLayout/TextLayout";

function Contact() {
  return (
    <section className="bg-bg section-padding min-h-screen">
      <div className="bg-accent/5 pointer-events-none absolute top-0 left-1/2 h-full w-1/2 -translate-x-1/2 rounded-full blur-[120px]" />
      <div className="section-width section-grid mt-10">
        <div className="">
          <div className="mx-auto max-w-4xl py-6 text-center">
            <TextLayout
              subtitle="contact.subtitle"
              title="contact.title"
              text="contact.text"
              translationKey="contactPage"
              isBoth={true}
              className="justify-center"
            />
          </div>

          <div className="mx-auto flex justify-center gap-4">
            <Button
              isLink={true}
              target="_blank"
              linkTo="https://github.com/Tanju67"
              className="flex-1 text-center"
            >
              Github Profile
            </Button>
            <Button
              isLink={true}
              target="_blank"
              linkTo="https://www.linkedin.com/in/tanju-%C3%B6zer-14b1b9231/"
              className="bg-accent! hover:bg-accent-hover! flex-1 text-center text-white"
            >
              Linkedin Profile
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mjglgzpv"
          method="POST"
          className="border-border bg-surface space-y-6 rounded-3xl border p-8 shadow-sm"
        >
          <div>
            <label
              htmlFor="name"
              className="text-primary mb-2 block text-sm font-medium"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="border-border bg-bg text-primary placeholder:text-secondary w-full rounded-xl border px-4 py-3 transition outline-none focus:ring-2"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-primary mb-2 block text-sm font-medium"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="border-border bg-bg text-primary placeholder:text-secondary w-full rounded-xl border px-4 py-3 transition outline-none focus:ring-2"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-primary mb-2 block text-sm font-medium"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Your message"
              className="border-border bg-bg text-primary placeholder:text-secondary w-full resize-none rounded-xl border px-4 py-3 transition outline-none focus:ring-2"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-bg inline-flex rounded-xl px-6 py-3 text-sm font-medium transition hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
