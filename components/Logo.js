import * as React from "react"

const SvgComponent = (props) => (
  <svg width={132} height={40} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#a)'>
      <path
        d='M34.477 1.882A17.154 17.154 0 0 0 25.86 4.19a17.225 17.225 0 0 1 8.617 14.932H17.242a17.239 17.239 0 1 0 17.235-17.24Z'
        fill='#0C0B14'
      />
    </g>
    <path
      d='M25.86 4.19a17.225 17.225 0 0 0-8.618 14.931h17.235A17.226 17.226 0 0 0 25.86 4.19Z'
      fill='url(#b)'
    />
    <g filter='url(#c)'>
      <path
        d='M25.86 4.19a17.225 17.225 0 0 1 8.617 14.931H17.242A17.224 17.224 0 0 0 25.86 34.05a17.24 17.24 0 1 1 0-29.86Z'
        fill='#B985FB'
      />
    </g>
    <defs>
      <filter
        id='a'
        x={-62.758}
        y={0.586}
        width={194.479}
        height={215.775}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'>
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={1.852} />
        <feGaussianBlur stdDeviation={1.574} />
        <feColorMatrix values='0 0 0 0 0.156863 0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0.0288889 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_0_24' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={8.148} />
        <feGaussianBlur stdDeviation={3.259} />
        <feColorMatrix values='0 0 0 0 0.156863 0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0.0471111 0' />
        <feBlend in2='effect1_dropShadow_0_24' result='effect2_dropShadow_0_24' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={20} />
        <feGaussianBlur stdDeviation={6.5} />
        <feColorMatrix values='0 0 0 0 0.156863 0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0.06 0' />
        <feBlend in2='effect2_dropShadow_0_24' result='effect3_dropShadow_0_24' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={38.519} />
        <feGaussianBlur stdDeviation={12.741} />
        <feColorMatrix values='0 0 0 0 0.156863 0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0.0728889 0' />
        <feBlend in2='effect3_dropShadow_0_24' result='effect4_dropShadow_0_24' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={64.815} />
        <feGaussianBlur stdDeviation={23.426} />
        <feColorMatrix values='0 0 0 0 0.156863 0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0.0911111 0' />
        <feBlend in2='effect4_dropShadow_0_24' result='effect5_dropShadow_0_24' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={100} />
        <feGaussianBlur stdDeviation={40} />
        <feColorMatrix values='0 0 0 0 0.156863 0 0 0 0 0.0196078 0 0 0 0 1 0 0 0 0.12 0' />
        <feBlend in2='effect5_dropShadow_0_24' result='effect6_dropShadow_0_24' />
        <feBlend in='SourceGraphic' in2='effect6_dropShadow_0_24' result='shape' />
      </filter>
      <filter
        id='c'
        x={-80}
        y={0.583}
        width={194.477}
        height={215.775}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'>
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={1.852} />
        <feGaussianBlur stdDeviation={1.574} />
        <feColorMatrix values='0 0 0 0 0.917647 0 0 0 0 0 0 0 0 0 0.145098 0 0 0 0.0264815 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_0_24' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={8.148} />
        <feGaussianBlur stdDeviation={3.259} />
        <feColorMatrix values='0 0 0 0 0.917647 0 0 0 0 0 0 0 0 0 0.145098 0 0 0 0.0431852 0' />
        <feBlend in2='effect1_dropShadow_0_24' result='effect2_dropShadow_0_24' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={20} />
        <feGaussianBlur stdDeviation={6.5} />
        <feColorMatrix values='0 0 0 0 0.917647 0 0 0 0 0 0 0 0 0 0.145098 0 0 0 0.055 0' />
        <feBlend in2='effect2_dropShadow_0_24' result='effect3_dropShadow_0_24' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={38.519} />
        <feGaussianBlur stdDeviation={12.741} />
        <feColorMatrix values='0 0 0 0 0.917647 0 0 0 0 0 0 0 0 0 0.145098 0 0 0 0.0668148 0' />
        <feBlend in2='effect3_dropShadow_0_24' result='effect4_dropShadow_0_24' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={64.815} />
        <feGaussianBlur stdDeviation={23.426} />
        <feColorMatrix values='0 0 0 0 0.917647 0 0 0 0 0 0 0 0 0 0.145098 0 0 0 0.0835185 0' />
        <feBlend in2='effect4_dropShadow_0_24' result='effect5_dropShadow_0_24' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={100} />
        <feGaussianBlur stdDeviation={40} />
        <feColorMatrix values='0 0 0 0 0.917647 0 0 0 0 0 0 0 0 0 0.145098 0 0 0 0.11 0' />
        <feBlend in2='effect5_dropShadow_0_24' result='effect6_dropShadow_0_24' />
        <feBlend in='SourceGraphic' in2='effect6_dropShadow_0_24' result='shape' />
      </filter>
      <linearGradient id='b' x1={8.506} y1={32.069} x2={35.821} y2={5.894} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#FFCF8E' />
        <stop offset={1} stopColor='#FF8B79' />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
