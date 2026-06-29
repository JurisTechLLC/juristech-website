import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JurisTech LLC — Legal AI Tools',
  description: 'JurisTech LLC builds AI-powered tools for law firms and legal professionals. Products include FetchFence, LexVex, LegalDocReview, and Ottomasion.',
  metadataBase: new URL('https://juristech.ai'),
  openGraph: {
    title: 'JurisTech LLC — Legal AI Tools',
    description: 'AI-powered legal technology for law firms and legal professionals.',
    url: 'https://juristech.ai',
    siteName: 'JurisTech LLC',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T27DJZRT');` }} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T27DJZRT" height="0" width="0" style={{display:'none',visibility:'hidden'}} />
        </noscript>
        {children}
      </body>
    </html>
  );
}
