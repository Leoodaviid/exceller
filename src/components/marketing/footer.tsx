import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import { PRODUCT_LINKS, RESOURCES_LINKS } from "@/constants";
import Logo from "../../../public/images/logo.png";
import Icons from "../global/icons";

const Footer = () => {
  return (
    <footer className="relative pt-16 md:pb-0 w-full overflow-hidden">
      <Wrapper>
        <Container animation="scaleUp" delay={0.3}>
          <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-[#050505] via-primary/40 to-[#050505]"></div>
        </Container>

        <div className="grid gap-8 xl:grid-cols-2 xl:gap-8">
          <Container animation="fadeRight" delay={0.4}>
            <div className="flex flex-col items-start justify-start md:max-w-[300px]">
              <div className="flex items-center gap-2">
                <Image
                  src={Logo}
                  alt="Exceller Agency"
                  width={32}
                  height={32}
                  className="w-10"
                />
                <span className="text-lg lg:text-xl font-medium">
                  Exceller Agency
                </span>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                Plataforma completa para cotações aéreas, emissão e gestão de
                viagens corporativas.
              </p>
              <div className="mt-4 text-sm text-muted-foreground px-4 py-2 cursor-pointer rounded-full border border-border/40 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-300">
                <Link href="tel:+551140001212">
                  <p>+55 (85) 98180-1316</p>
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="https://www.instagram.com/excelleragency"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Exceller Agency no Instagram"
                  className="inline-flex items-center justify-center rounded-full border border-border/50 bg-[#111111]/70 p-2 text-muted-foreground transition-colors duration-300 hover:border-primary/60 hover:text-primary"
                >
                  <Icons.instagram className="size-5" />
                </Link>
              </div>
            </div>
          </Container>

          <div className="grid grid-cols-2 md:place-items-end w-full">
            <Container animation="fadeUp" delay={0.5}>
              <div>
                <h3 className="text-base font-medium">Conheça a Exceller</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {PRODUCT_LINKS.map((link, index) => (
                    <Container
                      key={index}
                      animation="fadeLeft"
                      delay={0.6 + index * 0.1}
                    >
                      <li>
                        <Link
                          href={link.href}
                          className="hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    </Container>
                  ))}
                </ul>
              </div>
            </Container>

            <Container animation="fadeUp" delay={0.5}>
              <div>
                <h3 className="text-base font-medium">Suporte e contato</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {RESOURCES_LINKS.map((link, index) => (
                    <Container
                      key={index}
                      animation="fadeLeft"
                      delay={0.7 + index * 0.1}
                    >
                      <li>
                        <Link
                          href={link.href}
                          className="hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    </Container>
                  ))}
                </ul>
              </div>
            </Container>
          </div>
        </div>
      </Wrapper>
      <Container animation="fadeUp" delay={1}>
        <div className="mt-16 border-t border-border/80 py-4 flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Exceller Agency. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
      <Container animation="fadeUp" delay={2}>
        <div className="py-2 flex flex-col md:flex-row items-center justify-center z-50 relative">
          <p className="text-sm text-muted-foreground/40">
            © Powered by{" "}
            <Link
              target="_blank"
              href="https://leoodaviid.tech"
              className="transition-colors hover:underline hover:text-white"
            >
              Leoodaviid
            </Link>
          </p>
        </div>
      </Container>
      <div className="border-t border-border/80 py-2 flex flex-col md:flex-row items-center blur-[4rem] justify-center bg-primary/40 absolute bottom-0 lg:bottom-0 inset-x-0 h-6" />
    </footer>
  );
};

export default Footer;
