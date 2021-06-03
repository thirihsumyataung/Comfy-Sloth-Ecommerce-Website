import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='about'/>
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu velit, consequat nec justo eu, sodales suscipit massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae sodales erat. Ut ex sapien, elementum vel auctor sed, iaculis sed est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eget congue ipsum. Sed dignissim quam a ex commodo condimentum. Donec vel magna auctor, commodo velit ut, varius libero. Maecenas a enim mi.

        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
