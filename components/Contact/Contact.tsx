"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_tl70x2r",
          "template_pccn9vs",
          formRef.current,
          "k2UtwwjyErqh6ute5"
        )
        .then(
          (result) => {
            setSuccess(true);
            console.log(result);
          },
          (error) => {
            setError(true);
            console.log(error);
          }
        );
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <h1 className={styles.heading}>
        Contact <span>Me</span>
      </h1>
      <div className={styles.contactMe}>
        <div className={styles.work}>
          <h1>Let&apos;s work together</h1>
          <div className={styles.socials}>
            <a
              title="link"
              rel="noopener"
              href="https://www.linkedin.com/in/rb-isiaq"
              target="_blank"
              className={styles.social}
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a
              title="link"
              rel="noopener"
              href="https://www.twitter.com/RB_Isiaq"
              target="_blank"
              className={styles.social}
            >
              <Image src="/twitter.svg" alt="Twitter" width={30} height={30} />
            </a>
            <a
              title="link"
              rel="noopener"
              href="https://www.facebook.com/rb_isiaq"
              target="_blank"
              className={styles.social}
            >
              <Image src="/fb.svg" alt="Facebook" width={30} height={30} />
            </a>
            <a
              title="link"
              rel="noopener"
              href="mailto:isiaqridwanbukola1999@gmail.com"
              target="_blank"
              className={styles.social}
            >
              <Image src="/mail.svg" alt="Mail" width={30} height={30} />
            </a>
            <a
              title="link"
              rel="noopener"
              href="https://github.com/rb-isiaq"
              target="_blank"
              className={styles.social}
            >
              <Image src="/github.svg" alt="Github" width={30} height={30} />
            </a>
          </div>
        </div>
        <div className={styles.form}>
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              required
              type="text"
              title="Name"
              placeholder="Name"
              name="name"
            />
            <input
              required
              type="text"
              title="Email"
              placeholder="Email"
              name="email"
            />
            <textarea
              required
              title="msg"
              placeholder="Message"
              rows={10}
              cols={10}
              name="message"
            />
            <button className={styles.btn}>Contact Me</button>
          </form>
          {error && <p className={styles.error}>An error occured</p>}
          {success && <p className={styles.success}>Sent succesfully 👍</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
