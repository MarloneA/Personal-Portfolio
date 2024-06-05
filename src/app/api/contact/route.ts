import { NextResponse } from "next/server";

const handleFormInputAsync = async ({ name, email, phone, projectDetails }: { name: string, email: string, phone: string, projectDetails: string }) => {
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Project Details:', projectDetails);
}

export async function POST(req: Request, res: NextResponse) {

  const { name, email, phone, projectDetails } = await req.json();

  try {
    await handleFormInputAsync({ name, email, phone, projectDetails })

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: 'Failed to fetch data' })
  }
}