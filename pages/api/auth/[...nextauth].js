import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

// menggunakan nextauth untuk melakukan login dengan google dan github
// cek variabel env.local untuk melihat isi tiap client id dan secretnya

// next auth akan otomatis memberikan opsi ingin login by google atau github
export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	secret: 'test',
	jwt: {
		secret: 'test',
		encryption: true,
	},
});
