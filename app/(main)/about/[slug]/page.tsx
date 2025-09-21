const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div className="container mx-auto p-4 w-full flex flex-1 items-center justify-center">
      <h1 className="font-bold text-2xl text-primary">
        Working on {slug} page
      </h1>
    </div>
  );
};

export default Page;
