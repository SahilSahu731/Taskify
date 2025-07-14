import { useUser, SignOutButton } from "@clerk/clerk-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <section className="p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left User Info Card */}
        <Card className="w-full h-1/3 lg:max-w-xs">
          <CardContent className="p-6 space-y-4 text-center">
            <Avatar className="mx-auto h-20 w-20">
              <AvatarImage src={user?.imageUrl} alt={user?.fullName} />
              <AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-xl font-bold">{user?.fullName}</h2>
              <p className="text-sm text-gray-500">{user?.emailAddresses[0].emailAddress}</p>
            </div>

            <SignOutButton>
              <Button variant="outline" className="w-full">Sign Out</Button>
            </SignOutButton>
          </CardContent>
        </Card>

        {/* Main Dashboard Content */}
        <div className="flex-1 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-lg p-8 shadow-lg flex flex-col gap-8">
          {/* Welcome Message */}
          <div className="mb-2">
            <h1 className="text-3xl font-dancing font-bold text-blue-800 mb-2">Welcome back{user?.firstName ? `, ${user.firstName}` : ''}!</h1>
            <p className="text-gray-700 text-lg">Here's a quick overview of your productivity today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-t-4 border-blue-500">
              <span className="text-4xl font-bold text-blue-600 mb-1">8</span>
              <span className="text-gray-600">Tasks Completed</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-t-4 border-yellow-400">
              <span className="text-4xl font-bold text-yellow-500 mb-1">3</span>
              <span className="text-gray-600">Tasks In Progress</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-t-4 border-red-400">
              <span className="text-4xl font-bold text-red-500 mb-1">2</span>
              <span className="text-gray-600">Tasks Overdue</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-blue-100 rounded-lg p-6 mt-4">
            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-1">Stay on top of your tasks!</h2>
              <p className="text-gray-700">Start a new task or review your progress to boost your productivity.</p>
            </div>
            <a href="/tasks" className="mt-3 md:mt-0 inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-blue-800 transition-all duration-200">View Tasks</a>
          </div>
        </div>
      </div>
    </section>
  );
}
