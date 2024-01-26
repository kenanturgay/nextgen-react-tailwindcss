import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Motivation = () => {
  const {
    isPending,
    error,
    data: motivation = {},
  } = useQuery({
    queryKey: ["motivation"],
    queryFn: () =>
      axios
        .get("https://workintech-ng.onrender.com/motivation")
        .then((res) => res.data),
  });

  console.log("word data > ", motivation);

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <p>{motivation.word}</p>
      <p>{motivation.author}</p>
    </div>
  );
};
