export const revalidate = 10;

const REVIEW_FLOW =
  'https://artcryption-poc.directus.app/flows/trigger/fb6de8f5-95fe-4aed-a06d-0a6071e98278';

export async function POST(request: Request) {
  console.log('🚀 ~ file: route.ts:5 ~ POST ~ request:', request);
  const data = await request.json();
  console.log('🚀 ~ file: route.ts:6 ~ POST ~ data:', data);
  const payload = JSON.parse(data.payload);
  console.log('🚀 ~ file: route.ts:8 ~ POST ~ payload:', payload);
  const actions = payload.actions;
  const value = actions[0].value;

  await fetch(REVIEW_FLOW, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: value,
  });
  return Response.json({ text: 'thanks for your decision' });
}
