import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const RESET_LINK = `${process.env.BASE_URL}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "Exceller <contato@excelleragency.com>",
    to: email,
    subject: "Redefinir a sua senha",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
      Redefinir a sua senha
      
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
                Redefinir senha
            </h1>
            <p
              style="font-size:20px;line-height:28px;margin:16px 0;margin-bottom:30px"
            >
              O link para alterar sua senha está abaixo
            </p>
           <a href="${RESET_LINK}" style="display:inline-block; font-weight:600; padding:12px 24px; background-color:#b08330; color:#1d1c1d; text-decoration:none; border-radius:4px; font-size:16px;">
                    Redefinir senha
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
                              <p class="footer-text" style="margin:0 0 1px;font-size:15px;line-height:22px"><span style="font-weight:700">E-mail:</span> <a href="mailto:contato@excelleragency.com" style="color:#b08330;text-decoration:none">contato@excelleragency.com</a></p>
                              <p class="footer-text" style="margin:0 0 1px;font-size:15px;line-height:22px"><span style="font-weight:700">Site:</span> <a href="https://www.excelleragency.com" target="_blank" rel="noopener noreferrer" style="color:#b08330;text-decoration:none">www.excelleragency.com</a></p>
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

export const sendVerificationEmail = async (email: string, token: string) => {
  const CONFIRM_LINK = `${process.env.BASE_URL}/auth/verify-email?token=${token}`;

  await resend.emails.send({
    from: "Exceller <contato@excelleragency.com>",
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
                              <p class="footer-text" style="margin:0 0 1px;font-size:15px;line-height:22px"><span style="font-weight:700">E-mail:</span> <a href="mailto:contato@excelleragency.com" style="color:#b08330;text-decoration:none">contato@excelleragency.com</a></p>
                              <p class="footer-text" style="margin:0 0 1px;font-size:15px;line-height:22px"><span style="font-weight:700">Site:</span> <a href="https://www.excelleragency.com" target="_blank" rel="noopener noreferrer" style="color:#b08330;text-decoration:none">c</a></p>
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

type QuotationPassengerSummary = {
  adults: number;
  children: number;
  infants: number;
};

type QuotationNotificationPayload = {
  to: string;
  name: string;
  protocol: string;
  origin: string;
  destination: string;
  departure: string;
  returnDate?: string | null;
  passengers: QuotationPassengerSummary;
};

const formatPassengerSummary = (passengers: QuotationPassengerSummary) => {
  const parts = [
    `${passengers.adults} adulto(s)`,
    `${passengers.children} criança(s)`,
    `${passengers.infants} bebê(s)`,
  ];

  return parts.join(" · ");
};

export const sendQuotationConfirmationEmail = async (
  payload: QuotationNotificationPayload
) => {
  const { adults, children, infants } = payload.passengers;
  const passengers = [
    `${adults} adulto(s)`,
    `${children} criança(s)`,
    `${infants} bebê(s)`,
  ].join(" · ");

  const returnInfo = payload.returnDate
    ? `<li><strong>Volta:</strong> ${payload.returnDate}</li>`
    : "";

  await resend.emails.send({
    from: "Exceller <contato@excelleragency.com>",
    to: payload.to,
    subject: `Recebemos sua cotação ${payload.protocol}`,
    html: `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><style type="text/css">@media only screen and (max-width: 480px) {.stack-column { display:block !important; width:100% !important; }.stack-sep { border-left:0 !important; border-top:2px solid #b08330 !important; padding-left:0 !important; padding-top:12px !important; }.logo-img { width:96px !important; height:96px !important; margin-bottom:12px !important; }.footer-title { font-size:20px !important; }.footer-text { font-size:14px !important; line-height:20px !important; }}</style></head><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f8f8f8;margin:0;padding:24px;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:540px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 12px 30px rgba(0,0,0,0.08);">
    <tr>
      <td style="padding:28px 32px 12px 32px;background:linear-gradient(135deg,#0b0b0d,#1a1a1f);color:#f7f7f7;">
        <h1 style="margin:0;font-size:24px;font-weight:600;">Olá, ${payload.name}!</h1>
        <p style="margin:8px 0 0;font-size:16px;color:#e6e6e6;">Sua solicitação de cotação foi recebida e já está com nossos especialistas.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 32px;">
        <p style="margin:0 0 12px;font-size:16px;color:#111;">Protocolo: <strong>${payload.protocol}</strong></p>
        <ul style="margin:0;padding-left:18px;color:#1f1f1f;font-size:15px;line-height:24px;">
          <li><strong>Origem:</strong> ${payload.origin}</li>
          <li><strong>Destino:</strong> ${payload.destination}</li>
          <li><strong>Embarque:</strong> ${payload.departure}</li>
          ${returnInfo}
          <li><strong>Passageiros:</strong> ${passengers}</li>
        </ul>
        <p style="margin:18px 0 0;font-size:14px;color:#444;">Nossa equipe vai analisar rotas, negociar opções e entrar em contato em até <strong>24 horas</strong> com as melhores alternativas para você.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 32px;background:#fafafa;border-top:1px solid #ededed;">
        <p style="margin:0 0 16px;font-size:13px;color:#666;">Se precisar de algo antes disso, fale com a Exceller Agency pelo WhatsApp.</p>
        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
          <tbody>
            <tr>
              <td width="120" valign="middle" class="stack-column" style="padding-right:0;vertical-align:middle;">
                <img class="logo-img" alt="Exceller Agency" src="https://s3.leoodaviid.tech/packets/exceller-agency.png" width="120" height="120" style="display:block;outline:none;border:none;text-decoration:none;border-radius:8px;background:#0a0a0a;margin-right:20px;" />
              </td>
              <td valign="middle" class="stack-column stack-sep" style="vertical-align:middle;color:#1d1c1d;font-size:16px;line-height:20px;border-left:2px solid #b08330;padding-left:16px;">
                <div style="max-width:420px">
                  <p class="footer-title" style="margin:0 0 4px;font-size:22px;font-weight:700">Exceller Agency</p>
                  <p class="footer-text" style="margin:0 0 1px;color:#6b7280;font-size:15px;line-height:22px">Agência de Viagens &amp; Emissão de Passagens Aéreas</p>
                  <p class="footer-text" style="margin:0 0 1px;font-size:15px;line-height:22px"><span style="font-weight:700">Telefone/WhatsApp:</span> <a href="tel:+5585981801316" style="color:#b08330;text-decoration:none">(85) 98180-1316</a></p>
                  <p class="footer-text" style="margin:0 0 1px;font-size:15px;line-height:22px"><span style="font-weight:700">E-mail:</span> <a href="mailto:contato@excelleragency.com" style="color:#b08330;text-decoration:none">contato@excelleragency.com</a></p>
                  <p class="footer-text" style="margin:0 0 1px;font-size:15px;line-height:22px"><span style="font-weight:700">Site:</span> <a href="https://www.excelleragency.com" target="_blank" rel="noopener noreferrer" style="color:#b08330;text-decoration:none">www.excelleragency.com</a></p>
                  <p class="footer-text" style="margin:0;color:#6b7280;font-size:14px;line-height:20px">Tornando sua próxima viagem realidade</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>
</body></html>`,
  });
};

type AdminNotificationPayload = QuotationNotificationPayload & {
  customerEmail: string;
  customerPhone: string;
};

export const sendQuotationAdminAlertEmail = async (
  payload: AdminNotificationPayload
) => {
  const passengers = formatPassengerSummary(payload.passengers);

  await resend.emails.send({
    from: "Exceller <contato@excelleragency.com>",
    to: payload.to,
    subject: `Nova cotação recebida (${payload.protocol})`,
    html: `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8" /></head><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f4f4f5;margin:0;padding:24px;">
      <table align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 16px 30px rgba(0,0,0,0.1);">
        <tr>
          <td style="padding:24px 32px;background:#0f172a;color:#e2e8f0;">
            <p style="margin:0 0 4px;font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;">Nova cotação</p>
            <h1 style="margin:0;font-size:22px;font-weight:600;">${payload.protocol}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px;color:#1e293b;">
            <h2 style="margin:0 0 12px;font-size:18px;">Dados do cliente</h2>
            <p style="margin:0 0 4px;">${payload.name}</p>
            <p style="margin:0 0 4px;font-size:14px;color:#475569;">${payload.customerEmail}</p>
            <p style="margin:0 0 16px;font-size:14px;color:#475569;">${payload.customerPhone}</p>

            <h2 style="margin:0 0 12px;font-size:18px;">Detalhes da viagem</h2>
            <ul style="margin:0;padding-left:18px;font-size:14px;line-height:22px;color:#334155;">
              <li><strong>Origem:</strong> ${payload.origin}</li>
              <li><strong>Destino:</strong> ${payload.destination}</li>
              <li><strong>Embarque:</strong> ${payload.departure}</li>
              ${payload.returnDate ? `<li><strong>Retorno:</strong> ${payload.returnDate}</li>` : ""}
              <li><strong>Passageiros:</strong> ${passengers}</li>
            </ul>

            <p style="margin:18px 0 0;font-size:13px;color:#475569;">
              Atue nesta cotação em até <strong>24 horas</strong>. Utilize o painel administrativo para atualizar status, responder o cliente e registrar o responsável.
            </p>
          </td>
        </tr>
      </table>
    </body></html>`,
  });
};
