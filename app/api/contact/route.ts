import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nome,
      email,
      phone,
      subject,
      message,
      date,
      time,
    } = normalizeKeys(body || {});

    if (!email || !date) {
      return NextResponse.json({ error: "Campos obrigatórios em falta" }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!to || !apiKey) {
      return NextResponse.json(
        { error: "Envio de email não configurado. Defina RESEND_API_KEY e CONTACT_TO_EMAIL." },
        { status: 501 }
      );
    }

    const subjectLine = subject?.trim() || "Novo pedido de contacto";
    const html = buildHtml({ nome, email, phone, subject: subjectLine, message, date, time });

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject: subjectLine, html }),
    });

    if (!res.ok) {
      const txt = await res.text();
      return NextResponse.json({ error: `Falha ao enviar: ${txt}` }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Erro inesperado" }, { status: 500 });
  }
}

function normalizeKeys(obj: Record<string, any>) {
  // Suporta campos sem name definidos ou variantes
  return {
    nome: obj.nome || obj.name || obj.Nome || "",
    email: obj.email || "",
    phone: obj.phone || obj.telefone || "",
    subject: obj.subject || obj.assunto || "",
    message: obj.message || obj.mensagem || "",
    date: obj.date || obj.data || "",
    time: obj.time || obj.hora || "",
  };
}

function buildHtml({ nome, email, phone, subject, message, date, time }: any) {
  const esc = (s: string) => String(s || "").replace(/[&<>]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c] as string));
  return `
  <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5;color:#0f172a">
    <h2 style="margin:0 0 8px 0;font-size:18px;color:#111827">Novo pedido de contacto</h2>
    <p style="margin:0 0 12px 0;color:#334155">Recebeste um novo pedido através do site.</p>
    <table style="border-collapse:collapse;width:100%;max-width:560px">
      <tbody>
        <tr><td style="padding:6px 0;width:160px;color:#475569">Nome</td><td>${esc(nome)}</td></tr>
        <tr><td style="padding:6px 0;color:#475569">Email</td><td>${esc(email)}</td></tr>
        <tr><td style="padding:6px 0;color:#475569">Telefone</td><td>${esc(phone)}</td></tr>
        <tr><td style="padding:6px 0;color:#475569">Data</td><td>${esc(date)} ${esc(time)}</td></tr>
        <tr><td style="padding:6px 0;color:#475569">Assunto</td><td>${esc(subject)}</td></tr>
      </tbody>
    </table>
    <div style="margin-top:12px;padding:12px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc">
      <div style="font-weight:600;margin-bottom:8px;color:#0f172a">Mensagem</div>
      <div style="white-space:pre-wrap;color:#334155">${esc(message)}</div>
    </div>
  </div>`;
}

