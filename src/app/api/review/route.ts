// @ts-nocheck

export const revalidate = 10;

const REVIEW_FLOW =
  'https://artcryption-poc.directus.app/flows/trigger/6617d16f-5832-4609-ae4f-2787d7b6258b';

export async function POST(request: Request) {
  const data = await request.formData();
  const payload = JSON.parse(data.get('payload'));
  const actions = payload.actions;
  const value = actions[0].value;
  console.log('🚀 ~ file: route.ts:18 ~ POST ~ value:', value);

  await fetch(REVIEW_FLOW, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
  return Response.json({ text: 'thanks for your decision' });
}
