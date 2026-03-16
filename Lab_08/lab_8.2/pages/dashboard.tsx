import { GetServerSideProps } from "next";
import { User, Notification, getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: { pageViews: number; sessions: number; bounceRate: number };
  currentTime: string;
  error?: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime, error }: DashboardProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {user.name}</h1>
        <p>Role: {user.role}</p>
      </header>
      <section className="analytics">
        <h2>Analytics</h2>
        <div className="stats">
          <div>Page Views: {analytics.pageViews.toLocaleString()}</div>
          <div>Sessions: {analytics.sessions.toLocaleString()}</div>
          <div>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</div>
        </div>
      </section>
      <section className="notifications">
        <h2>Notifications ({unreadCount} unread)</h2>
        <ul>
          {notifications.map(notif => (
            <li key={notif.id} className={notif.read ? "read" : "unread"}>
              <span className={`type ${notif.type}`}>{notif.type}</span> {notif.message}
            </li>
          ))}
        </ul>
      </section>
      {error ? <p style={{ color: "crimson" }}>{error}</p> : null}
      <footer><p>Last updated: {currentTime}</p></footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const user = getCurrentUser();
    const [notifications, analytics] = await Promise.all([
      getUserNotifications(user.id),
      getUserAnalytics(user.id),
    ]);

    return {
      props: {
        user,
        notifications,
        analytics,
        currentTime: new Date().toISOString(),
      },
    };
  } catch {
    const user = getCurrentUser();

    return {
      props: {
        user,
        notifications: [],
        analytics: { pageViews: 0, sessions: 0, bounceRate: 0 },
        currentTime: new Date().toISOString(),
        error: "Unable to load dashboard data. Please refresh.",
      },
    };
  }
};