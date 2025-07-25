import { UserSection } from "./user-section";
import { UserVideosSection } from "./user-videos-section";

interface UserViewProps {
    userId: string;
}

export const UserView = ({userId}:UserViewProps) => {
  return (
    <div className="flex flex-col max-w-[1300px] px-4 pt-2.5 mx-auto mb-10 gap-y-6">
        <UserSection userId={userId} />
        <UserVideosSection userId={userId} />
    </div>
  )
}

