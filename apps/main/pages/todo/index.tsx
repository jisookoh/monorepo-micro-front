import dynamic from "next/dynamic";

const TodoApp = dynamic(() => import("todo/TodoApp"), { ssr: false });

export default function Todo() {
  return (
    <div>
      <h1>Main App</h1>
      <TodoApp />
    </div>
  );
}
