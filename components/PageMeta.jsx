export default function PageMeta(props) {
  return (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='title' content={props?.title ? props.title : 'spin (dot) rip'} />
      <meta name='description' content='a home for spin and other things' />
      <meta name='keywords' content='spin, spinfal, minecraft, among us, amogus, spin.rip' />
      <meta name='robots' content='index, nofollow' />
      <meta name='language' content='English' />
      <meta name='author' content='Spinfal' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

      <meta name='og:type' content='website' />
      <meta name='og:url' content='https://spin.rip' />
      <meta name='og:title' content={props?.title ? props.title : 'spin (dot) rip'} />
      <meta name='og:description' content='a home for spin and other things' />
      <meta name='og:image' content='https://projects.spin.rip/spin.rip/spinfal-large.png' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@Spinfal' />
      <meta name='twitter:url' content='https://spin.rip' />
      <meta name='twitter:title' content={props?.title ? props.title : 'spin (dot) rip'} />
      <meta name='twitter:description' content='a home for spin and other things' />
      <meta name='twitter:image' content='https://projects.spin.rip/spin.rip/spinfal.png' />
    </>
  )
}
