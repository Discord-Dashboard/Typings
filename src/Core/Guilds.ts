export interface GuildResponse {
    id: string;
    name: string;
    icon: string;
    banner: string;
    owner: boolean;
    permissions: BigInt;
    permissions_new: string;
    features: string[];
}

export interface GuildMember {
    avatar: string | null;
    banner: string | null;
    communication_disabled_until: string | null;
    flags: number;
    joined_at: string;
    nick: string | null;
    pending: boolean;
    premium_since: string | null;
    roles: string[];
    unusual_dm_activity_until: string | null;
    user: User;
    mute: boolean;
    deaf: boolean;
    bio: string;
}

interface User {
    id: string;
    username: string;
    avatar: string | null;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string | null;
    accent_color: number | null;
    global_name: string;
    avatar_decoration_data: AvatarDecorationData | null;
    banner_color: string | null;
    clan: string | null;
}

interface AvatarDecorationData {
    asset: string;
    sku_id: string;
    expires_at: string | null;
}
