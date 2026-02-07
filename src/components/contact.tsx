import { ContactForm } from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
