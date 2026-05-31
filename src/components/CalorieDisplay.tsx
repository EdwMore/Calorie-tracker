type CalorieDisplayProps = {
  calorie: number;
  text: string;
};

export default function CalorieDisplay({ calorie, text }: CalorieDisplayProps) {
  const colorClass =
    text === "Consumidas"
      ? "text-lime-400"
      : text === "Quemadas"
        ? "text-orange-400"
        : "text-white";

  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span className={`font-black text-6xl ${colorClass}`}>{calorie}</span>
      {text}
    </p>
  );
}
