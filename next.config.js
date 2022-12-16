/** @type {import('next/dist/next-server/server/config-shared').NextConfig} */
const config = {
    async redirects() {
      return [
        {
          source: '/merches', // リダイレクト元のURL
          destination: '/products', // リダイレクト先のURL
          permanent: true, // 永続的なリダイレクトかのフラグ
        },
      ]
    },
  }
  
  module.exports = config