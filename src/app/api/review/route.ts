const REVIEW_FLOW =
  'https://artcryption-poc.directus.app/flows/trigger/fb6de8f5-95fe-4aed-a06d-0a6071e98278';

export async function POST(request: Request) {
  const data = await request.json();
  const payload = JSON.parse(data.payload);
  const actions = payload.actions;
  const value = actions[0].value;

  console.log('🚀 ~ file: route.js:4 ~ POST ~ body:', value);
  await fetch(REVIEW_FLOW, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: value,
  });
  return Response.json({ text: 'thanks for your decision' });
}
