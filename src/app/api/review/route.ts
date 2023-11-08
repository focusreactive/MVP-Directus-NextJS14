// @ts-nocheck

export const revalidate = 10;

const REVIEW_FLOW =
  'https://artcryption-poc.directus.app/flows/trigger/fb6de8f5-95fe-4aed-a06d-0a6071e98278';

export async function POST(request: Request) {
  console.log('🚀 got request');
  console.log('🚀 got body', request.body);
  const data = await request.formData();
  console.log('🚀 got data', data);
  const payload = JSON.parse(data.payload);
  console.log('🚀 got payload', payload);
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
