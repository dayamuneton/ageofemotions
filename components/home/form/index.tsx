import { FormEvent, useState, useEffect, useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { useRouter } from "next/router";

const MAILERLITE_API_URL = "https://connect.mailerlite.com/api/subscribers";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [terms, setTerms] = useState(false);

  const subscribeToGift = async (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      email: email,
      fields: {
        name: name,
        last_name: lastName,
      },
      groups: ["71259999082382462"],
    };

    const data = JSON.stringify(payload);

    const response = await fetch(MAILERLITE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          process.env.NEXT_PUBLIC_MAILERLITE_API_KEY || ""
        }`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse);

    setEmail("");
    setName("");
    setLastName("");
    setTerms(false);
  };

  const router = useRouter();
  const giftRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollToGift = () => {
      if (router.asPath === "/gift") {
        giftRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };
    scrollToGift();
  }, [router]);
  return (
    <div
      ref={giftRef}
      className="bg-[#faf8f5] flex flex-col items-center p-8 w-full"
    >
      <span className="flex mb-10 text-3xl font-bold font-play-fair">
        Recibe tu
        <p className=" bg-[#e5f10d] pr-2">&nbsp;Regalo</p>
      </span>
      <form
        className="bg-[#fdfdf9] p-8 w-[min(95%,40rem)]"
        onSubmit={subscribeToGift}
      >
        <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row">
          <span className="inputBox">
            <label className="absolute top-[-1.5rem]" htmlFor="name">
              Nombre
            </label>
            <input
              className="inputs"
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>

          <span className="inputBox">
            <label className="absolute top-[-1.5rem]" htmlFor="lastname">
              Apellido
            </label>
            <input
              className="inputs"
              type="text"
              name="lastname"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </span>

          <span className="inputBox">
            <label className="absolute top-[-1.5rem]" htmlFor="email">
              Email
            </label>
            <input
              className="inputs"
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 mt-4 md:flex-row">
          <span>
            <input
              type="checkbox"
              name="terms"
              id=""
              required
              checked={terms}
              onChange={() => setTerms(!terms)}
            />
            <label htmlFor="terms" className="px-2 text-sm">
              Acepto los términos y condiciones
            </label>
          </span>

          <button type="submit" className="p-2 px-8 text-white bg-black">
            Quiero mi regalo
          </button>
        </div>
      </form>

      <span className="text-[.75rem] flex flex-col items-center">
        {/* <p> */}
        <span className="flex gap-1">
          <p>Daya Muneton © All rights reserved.</p>
          <Link href="/politica-de-privacidad" target="_blank">
            Política de privacidad
          </Link>
          |
          <Link href="/politica-de-cookies" target="_blank">
            Política de cookies
          </Link>
          |
          <Link href="/terminos-y-condiciones" target="_blank">
            Términos de uso
          </Link>
        </span>

        <span className="flex items-center justify-between p-2 mt-4 text-white bg-black w-fit">
          <Link href="https://www.facebook.com/dayamuneton" target="_blank">
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCcwzib11TVK-eQVbwgDfN5g/featuredj"
            target="_blank"
          >
            <YouTubeIcon />
          </Link>
          <Link href="https://www.instagram.com/dayamuneton/" target="_blank">
            <InstagramIcon />
          </Link>
        </span>
      </span>
    </div>
  );
}

export default Form;
