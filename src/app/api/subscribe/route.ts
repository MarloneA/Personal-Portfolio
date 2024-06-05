import type { NextApiRequest, NextApiResponse } from 'next'

const handleFormInputAsync = async ({ email }: { email: string }) => {
  console.log('Email:', email);
}

export async function POST(
  req: Request,
  res: NextApiResponse
) {
  const { email } = await req.json()

  try {
    await handleFormInputAsync({ email })

    return Response.json({ success: true });
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' })
  }
}
