import { sendMail } from "@/lib/send-mail";
import { NextResponse } from "next/server";

const handleFormInputAsync = async ({ name, email, phone, projectDetails, files }: { name: string, email: string, phone: string, projectDetails: string, files: any }) => {
  await sendMail({
    to: 'marlone.akidiva@gmail.com',
    subject: `Hi Marlone, ${name} has an opportunity for you`,
    html:`
      <div>
        Hi Marlone! <br />
        <br />
        My name is ${name} and I'd like to discuss a potential project with you.
        <br />
        <br />
        Here are some details about my project: 
        <br />
        <br />
        ${projectDetails}
        <br/>
        <br/>
        If this sounds like something you'd be interested in feel free to reach
        out to me at ${email}
        <br />
        <br />
        Warm Regards 
        ${name}
      </div>
    `,
    from: email,
    files
  })
}

export async function POST(req: Request, res: NextResponse) {

  const { name, email, phone, projectDetails, files } = await req.json();

  try {
    await handleFormInputAsync({ name, email, phone, projectDetails, files })

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: 'Failed to fetch data' })
  }
}