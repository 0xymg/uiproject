import AnalyticsChart from "@/components/Dashboard/AnalyticsChart";
import DashCards from "@/components/Dashboard/DashCards";
import PostsTable from "@/components/posts/PostsTable";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from 'lucide-react'



export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-semibold">
        Dashboard
      </h2> <hr />
      <div className="flex gap-5 flex-wrap mt-5">
        <DashCards title="DELAY" content={<Newspaper size={48} />} footer="Today"></DashCards>
        <DashCards title="FLIGHT" content={<Newspaper size={48} />} footer="Today"></DashCards>
        <DashCards title="TAXI TIME" content={<Newspaper size={48} />} footer="Today"></DashCards>
        <DashCards title="ACTIVE FLIGHTS" content={<Newspaper size={48} />} footer="Today"></DashCards>
      </div>
<AnalyticsChart></AnalyticsChart>
      <div className="flex flex-wrap mt-5">
        <PostsTable title="Most Flown Statistics" limit={5} />
      </div>


    </>
  );
}
