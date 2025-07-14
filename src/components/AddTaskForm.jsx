import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '@/redux/taskSlice';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function AddTaskForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [status, setStatus] = useState('pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask({ title, description, priority, status }));
    setTitle('');
    setDescription('');
    setPriority('medium');
    setStatus('pending');
  };

  
  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-2xl border-0">
      <CardHeader className="pb-0">
        <CardTitle className="text-3xl font-dancing text-blue-800 text-center mb-2">Add New Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="rounded-xl border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm text-lg px-5 py-3 bg-white/90"
          />

          <Textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-xl border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 shadow-sm text-base px-5 py-3 bg-white/90 min-h-[80px]"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="priority" className="block mb-1 text-sm font-semibold text-yellow-700">Priority</label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger id="priority" className="rounded-xl border-yellow-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 bg-white/90 text-yellow-700 font-semibold">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="status" className="block mb-1 text-sm font-semibold text-purple-700">Progress</label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger id="status" className="rounded-xl border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 bg-white/90 text-purple-700 font-semibold">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inprogress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg shadow-lg transition-all duration-200"
          >
            Add Task
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
