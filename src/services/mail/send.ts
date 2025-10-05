import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.BASE_URL}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "EXCELLER <mail@martifer.leoodaviid.tech>",
    to: email,
    subject: "Redefinir a sua senha",
    html: `<p>Clique <a href="${resetLink}">aqui</a> para redefinir senha.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const CONFIRM_LINK = `${process.env.BASE_URL}/auth/verify-email?token=${token}`;

  await resend.emails.send({
    from: "EXCELLER <mail@martifer.leoodaviid.tech>",
    to: email,
    subject: "Confirme seu e-mail",
    html:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="pt-BR">
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link
      rel="preload"
      as="image"
      href="https://s3.leoodaviid.tech/packets/exceller.png"
    />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <style type="text/css">
      @media only screen and (max-width: 480px) {
        .stack-column { display:block !important; width:100% !important; }
        .stack-sep { border-left:0 !important; border-top:2px solid #b08330 !important; padding-left:0 !important; padding-top:12px !important; }
        .logo-img { width:96px !important; height:96px !important; margin-bottom:12px !important; }
        .footer-title { font-size:20px !important; }
        .footer-text { font-size:14px !important; line-height:20px !important; }
      }
    </style>
  </head>
  <body
    style="background-color:#ffffff;margin:0 auto;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  >
    <div
      style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"
    >
      Confirme seu e-mail
      
    </div>
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em;margin:0 auto;padding:0px 20px"
    >
      <tbody>
        <tr style="width:100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="margin-top:32px"
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      alt="Exceller Agency"
                      height="105"
                      src="https://s3.leoodaviid.tech/packets/exceller.png"
                      style="display:block;outline:none;border:none;text-decoration:none"
                      width="120"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <h1
              style="color:#1d1c1d;font-size:36px;font-weight:700;margin:30px 0;padding:0;line-height:42px"
            >
              Confirmar E-mail
            </h1>
            <p
              style="font-size:20px;line-height:28px;margin:16px 0;margin-bottom:30px"
            >
              O seu link de confirmação está abaixo
            </p>
           <a href="${CONFIRM_LINK}" style="display:inline-block; font-weight:600; padding:12px 24px; background-color:#b08330; color:#1d1c1d; text-decoration:none; border-radius:4px; font-size:16px;">
                    Confirmar E-mail
                  </a>
            <p style="font-size:14px;line-height:24px;margin:16px 0;color:#000">
              Se você não solicitou este e-mail, fique tranquilo(a), não há com o que se preocupar. 
              Você pode ignorá-lo com segurança.
            </p>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="margin-top:32px;padding-top:16px;border-top:1px solid #eeeeee"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td width="120" valign="middle" class="stack-column" style="padding-right:0;vertical-align:middle;">
                            <img
                              alt="Exceller Agency"
                              src="https://s3.leoodaviid.tech/packets/exceller-agency.png"
                              width="120"
                              height="120"
                              class="logo-img"
                              style="display:block;outline:none;border:none;text-decoration:none;border-radius:8px;background:#0a0a0a;margin-right:20px;"
                            />
                          </td>
                          <td valign="middle" class="stack-column stack-sep" style="vertical-align:middle;color:#1d1c1d;font-size:16px;line-height:20px;border-left:2px solid #b08330;padding-left:16px;">
                            <div style="max-width:420px">
                              <p class="footer-title" style="margin:0 0 4px;font-size:22px;font-weight:700">Exceller Agency</p>
                              <p class="footer-text" style="margin:0 0 1px;color:#6b7280;font-size:15px;line-height:22px">Agência de Viagens &amp; Emissão de Passagens Aéreas</p>
                              <p class="footer-text" style="margin:0 0 1px;font-size:15px;line-height:22px"><span style="font-weight:700">Telefone/WhatsApp:</span> <a href="tel:+5585981801316" style="color:#b08330;text-decoration:none">(85) 98180-1316</a></p>
                              <p class="footer-text" style="margin:0 0 1px;font-size:15px;line-height:22px"><span style="font-weight:700">E-mail:</span> <a href="mailto:contato@excelleragency.com.br" style="color:#b08330;text-decoration:none">contato@excelleragency.com.br</a></p>
                              <p class="footer-text" style="margin:0 0 1px;font-size:15px;line-height:22px"><span style="font-weight:700">Site:</span> <a href="https://www.excelleragency.com.br" target="_blank" rel="noopener noreferrer" style="color:#b08330;text-decoration:none">www.excelleragency.com.br</a></p>
                              <p class="footer-text" style="margin:0;color:#6b7280;font-size:14px;line-height:20px">Tornando sua próxima viagem realidade</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    
    
  </body>
</html>`,
  });
};
