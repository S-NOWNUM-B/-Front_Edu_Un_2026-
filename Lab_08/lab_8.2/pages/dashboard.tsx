import { GetServerSideProps } from "next";
import { User, Notification, getCurrentUser, getUserNotifications } from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: { pageViews: number; sessions: number };
  currentTime: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {user.name}</h1>
        <p>Role: {user.role}</p>
      </header>
      <section>
        <h2>Analytics</h2>
        <p>Page Views: {analytics.pageViews}</p>
        <p>Sessions: {analytics.sessions}</p>
      </section>
      <section>
        <h2>Notifications ({unreadCount} unread)</h2>
        <ul>
          {notifications.map(notif => (
            <li key={notif.id} style={{ color: notif.read ? 'gray' : 'black' }}>
              [{notif.type.toUpperCase()}] {notif.message}
            </li>
          ))}
        </ul>
      </section>
      <footer><p>Last updated: {currentTime}</p></footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = {
    pageViews: Math.floor(Math.random() * 10000),
    sessions: Math.floor(Math.random() * 1000),
  };

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};