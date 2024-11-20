import { json } from "@sveltejs/kit";

import sgMail from "@sendgrid/mail";

import { SENDGRID_API_KEY } from "$env/static/private";

sgMail.setApiKey(SENDGRID_API_KEY);

const PDF_GUIDE_URL =
	"https://narrify-public.s3.eu-central-1.amazonaws.com/sample.pdf";

export async function POST({ request }) {
	const requestBody = await request.json();

	const respone = await fetch(PDF_GUIDE_URL);
	const pdfBuffer = await respone.arrayBuffer();
	const base64String = Buffer.from(pdfBuffer).toString("base64");

	const customerEmail: string = requestBody.data.object.customer_details.email;
	const customerName: string = requestBody.data.object.customer_details.name;

	const message = {
		to: customerEmail,
		from: "mian.lopezjimenez@gmail.com",
		subject: "Your Purchase Confirmation - Complete Spain Relocation Guide",
		html: `
      <h1>Thank You for Your Purchase!</h1>
      <p>Dear ${customerName},</p>
      <p>Thank you for making the purchase of our ebook. We are excited to share it with you.</p>
      <p>Best regards,<br>The Spain Relocation Guide Team</p>
    `,
		attachments: [
			{
				content: base64String,
				filename: "Digital Ebook - Spain Relocation Guide.pdf",
				type: "application/pdf",
				dissposition: "attachment"
			}
		]
	};

	await sgMail.send(message);

	return json({ response: "Email sent" });
}
