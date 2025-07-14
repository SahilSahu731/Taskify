import { useSelector } from 'react-redux';
import { useState } from 'react';
import AddTaskForm from '@/components/AddTaskForm';
import { Button } from '@/components/ui/button';

export default function TasksPage() {
  const tasks = useSelector(state => state.tasks.tasks || []);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="p-4 space-y-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-dancing font-bold text-blue-800">Your Tasks</h1>
        <Button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2 rounded-full shadow-lg transition-all duration-200"
          onClick={() => setShowModal(true)}
        >
          + New Task
        </Button>
      </div>

      {/* Task List or Empty State */}
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white/80 rounded-xl shadow-inner">
          <img src="/taskify.svg" alt="No tasks" className="w-24 h-24 mb-4 opacity-60" />
          <p className="text-xl text-gray-500 font-semibold">No tasks yet. Start by creating a new task!</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task, idx) => (
            <li key={idx} className="bg-white/90 rounded-lg shadow flex flex-col md:flex-row md:items-center justify-between p-5 border-l-4 border-blue-400 hover:shadow-lg transition">
              <div>
                <h2 className="text-lg font-bold text-blue-800">{task.title}</h2>
                {task.description && <p className="text-gray-600 mt-1">{task.description}</p>}
                <div className="mt-2 flex gap-3 text-sm">
                  <span className={`px-2 py-1 rounded-full font-semibold ${task.priority === 'high' ? 'bg-red-100 text-red-600' : task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority</span>
                  <span className={`px-2 py-1 rounded-full font-semibold ${task.status === 'completed' ? 'bg-green-100 text-green-700' : task.status === 'inprogress' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-200 text-gray-700'}`}>{task.status === 'inprogress' ? 'In Progress' : task.status.charAt(0).toUpperCase() + task.status.slice(1)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal for Add Task */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-0 max-w-lg w-full relative animate-fadeInUp">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="p-6">
              <AddTaskForm />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
