import Button from "../../shared/UIElements/button/Button";
import TextLayout from "../../shared/UIElements/textLayout/TextLayout";

function Contact() {
  return (
    <div className="bg-bg section-padding">
      <div className="mx-auto max-w-2xl text-center">
        <div className="">
          <TextLayout
            subtitle="contact.subtitle"
            title="contact.title"
            text="contact.text"
            translationKey="homePage"
            className="justify-center"
          />

          <div className="btn-size mt-4">
            <Button isLink={true} linkTo="/contact">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
