import { PermissionsBitField } from 'discord.js';

interface Config {
    api: {
        protocol: 'http' | 'https';
        domain: string;
        port: number;

        session: {
            secret: string;
        };

        guild_management: {
            permissions_required: PermissionsBitField;
        };
    };

    discord_oauth2: {
        client_id: string;
        client_secret: string;
    };

    assistants_technologies: {
        token: string;
    };
}

export { Config };
