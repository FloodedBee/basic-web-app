export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is")) {
    const arr: string[] = query.split(" ");
    const intVal1: number = parseInt(arr[2]);
    const intVal2: number = parseInt(arr[4]);
    return (intVal1+intVal2).toString();
  }
  return "";
}
