import Chat from '../../components/Chat';

interface ProfileProps {
  id: string;
  username: string;
}

// SSR-like: fetch mỗi lần truy cập
async function getProfile(id: string): Promise<ProfileProps> {
  return { id, username: `User_${id}` };
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const profile = await getProfile(params.id);

  return (
    <div>
      <h2>Profile Page (SSR-like)</h2>
      <p>User ID: {profile.id}</p>
      <p>Username: {profile.username}</p>
      <Chat /> {/* CSR */}
    </div>
  );
}
