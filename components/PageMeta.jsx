export default function PageMeta(props) {
  return (
    <>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='HandheldFriendly' content='True' />
      <meta name='title' content={props?.title ? props.title : 'spin (dot) rip'} />
      <meta name='description' content={props?.desc ? props.desc : 'a home for spin and other things. i am an aspiring fullstack software developer based in arizona.'} />
      <meta name='keywords' content='spin, spinfal, spin.rip, fullstack, developer, fullstack developer, dominic segura, dominic, segura' />
      <meta name='robots' content={props?.robots ? props.robots : 'index, follow'} />
      <meta name='language' content='English' />
      <meta name='author' content='Spinfal' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='theme-color' content='#000000' />

      <meta name='og:type' content='website' />
      <meta name='og:url' content='https://spin.rip' />
      <meta name='og:title' content={props?.title ? props.title : 'spin (dot) rip'} />
      <meta name='og:description' content={props?.desc ? props.desc : 'a home for spin and other things. i am an aspiring fullstack software developer based in arizona.'} />
      <meta name='og:image' content='https://storage.spin.rip/projects/spin.rip/spinfal-large.png' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@Spinfal' />
      <meta name='twitter:url' content='https://spin.rip' />
      <meta name='twitter:title' content={props?.title ? props.title : 'spin (dot) rip'} />
      <meta name='twitter:description' content={props?.desc ? props.desc : 'a home for spin and other things. i am an aspiring fullstack software developer based in arizona.'} />
      <meta name='twitter:image' content='https://storage.spin.rip/projects/spin.rip/spinfal.png' />
    </>
  );
}
