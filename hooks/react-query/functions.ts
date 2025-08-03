


export const FetchMockInterviews = async () => {
  const res = await fetch(`/api/interview/getall`);
  const data = await res.json();
  return data;
};
