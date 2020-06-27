import * as React from 'react'

function SvgStore(props) {
  return (
    <svg width={38} height={33} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.527 25.26a.742.742 0 00-.745.737v1.483c0 .407.334.738.745.738s.745-.33.745-.738v-1.483a.742.742 0 00-.745-.738zm9.983-11.794a2.877 2.877 0 01-1.626 2.584l-.018.01a2.93 2.93 0 01-.158.069l-.03.012a2.907 2.907 0 01-.14.05l-.027.01c-.113.037-.229.067-.346.09-.004 0-.007 0-.01.002a2.83 2.83 0 01-.159.025l-.04.005c-.044.005-.09.01-.135.013l-.043.004a2.941 2.941 0 01-.308.002l-.055-.004a2.709 2.709 0 01-.288-.033 2.93 2.93 0 01-1.895-1.18l-.021-.03a2.678 2.678 0 01-.14-.222l-.03-.055c-.012-.02-.023-.042-.033-.063a2.987 2.987 0 01-.103-.227l-.021-.052a2.389 2.389 0 01-.027-.075l-.015-.044a2.844 2.844 0 01-.143-.891v-1.835h5.811v1.835zm-1.854 4.229v13.829h-2.484v-7.54c0-2.402-1.972-4.355-4.396-4.355-2.423 0-4.395 1.953-4.395 4.354v7.54H3.372V17.7l.025.005a4.579 4.579 0 00.447.08l.06.008c.063.007.126.012.19.017.02 0 .04.003.06.004a4.492 4.492 0 00.671-.013l.078-.009.096-.012a4.403 4.403 0 002.958-1.76l.048-.065.046-.066.045.064a4.79 4.79 0 00.112.152c.054.07.11.138.168.205l.001.001a4.403 4.403 0 002.822 1.481l.078.009a4.287 4.287 0 00.673.013c.059-.003.117-.008.176-.013l.078-.009.096-.012a4.402 4.402 0 002.725-1.468l.002-.003c.057-.065.113-.132.166-.201l.002-.003a4.21 4.21 0 00.112-.152l.045-.064.045.064a4.638 4.638 0 00.112.152 4.438 4.438 0 002.895 1.675l.096.012.078.009a4.287 4.287 0 00.673.013c.059-.003.117-.008.176-.013l.078-.009.096-.012a4.402 4.402 0 002.725-1.468l.002-.003c.057-.065.113-.132.166-.201l.002-.003a3.852 3.852 0 00.112-.152l.045-.064.045.064a4.638 4.638 0 00.112.152 4.504 4.504 0 00.17.206 4.403 4.403 0 002.82 1.481l.079.009a4.269 4.269 0 00.673.013c.059-.003.117-.008.176-.013l.078-.009a4.403 4.403 0 002.82-1.48l.003-.003c.057-.065.113-.132.166-.201l.002-.003a4.642 4.642 0 00.112-.152l.045-.064.045.064a5.53 5.53 0 00.112.152c.054.07.11.138.168.205l.002.001a4.403 4.403 0 002.821 1.481l.078.009a4.282 4.282 0 00.675.013l.062-.005c.065-.005.129-.01.193-.017l.061-.008a4.32 4.32 0 00.474-.087l.011-.002zm-9.785 13.829v-7.54c0-1.588 1.303-2.88 2.905-2.88 1.602 0 2.906 1.292 2.906 2.88v7.54H24.87zM1.495 11.63h5.81v1.835a2.846 2.846 0 01-.159.94l-.024.068-.026.064-.022.054a2.893 2.893 0 01-.051.113L7 14.749a2.882 2.882 0 01-.036.071l-.028.05a3.39 3.39 0 01-.068.114l-.034.052-.039.058-.026.037a2.93 2.93 0 01-1.891 1.174h-.002a3.049 3.049 0 01-.286.033l-.055.004a2.962 2.962 0 01-.306-.002l-.044-.004a2.921 2.921 0 01-.318-.04l-.023-.005a2.907 2.907 0 01-.337-.086l-.036-.012a3.022 3.022 0 01-.279-.11l-.048-.021a2.877 2.877 0 01-1.649-2.595V11.63zm3.407-6.482h4.51l-1.884 5.005H2.026L4.902 5.15zm.312-3.673h27.64v2.196H5.214V1.476zm25.295 8.678L28.626 5.15h4.395l2.934 5.005H30.51zM27.035 5.15l1.884 5.005h-5.616L22.31 5.15h4.726zm-6.245 0l.995 5.005h-5.533l.995-5.005h3.543zm-5.062 0l-.994 5.005H9.118l1.883-5.005h4.727zm-3.551 11.157a3.067 3.067 0 01-.61.036l-.055-.004a2.709 2.709 0 01-.289-.033 2.93 2.93 0 01-1.894-1.18l-.021-.03a2.612 2.612 0 01-.14-.222l-.03-.055c-.012-.02-.023-.042-.033-.063-.01-.017-.018-.034-.027-.052a3.06 3.06 0 01-.076-.175l-.021-.052a2.522 2.522 0 01-.027-.075l-.015-.044a2.845 2.845 0 01-.143-.891v-1.835h5.81v1.835a2.844 2.844 0 01-.183 1.008l-.026.064-.022.054a2.778 2.778 0 01-.051.113l-.022.044a2.673 2.673 0 01-.037.071l-.028.05-.036.061-.032.053-.034.053-.039.057-.026.037a2.93 2.93 0 01-1.89 1.174h-.003zm7.3 0a3.019 3.019 0 01-.61.036l-.054-.004a2.738 2.738 0 01-.288-.033 2.93 2.93 0 01-1.895-1.18l-.021-.03a3.04 3.04 0 01-.042-.062l-.03-.047a2.252 2.252 0 01-.099-.168l-.032-.063c-.01-.017-.018-.034-.027-.052a3.252 3.252 0 01-.076-.175l-.021-.052a2.67 2.67 0 01-.027-.075l-.015-.044a2.844 2.844 0 01-.143-.891v-1.835h5.81v1.835a2.848 2.848 0 01-.141.889l-.018.05a2.658 2.658 0 01-.024.069l-.026.064-.022.054a2.92 2.92 0 01-.051.113l-.023.044a2.673 2.673 0 01-.036.071l-.028.05a4.238 4.238 0 01-.102.167l-.039.057-.026.037a2.93 2.93 0 01-1.89 1.174h-.003zm7.302 0a2.972 2.972 0 01-.61.036l-.055-.004a2.716 2.716 0 01-.288-.033 2.93 2.93 0 01-1.895-1.18l-.021-.03a2.389 2.389 0 01-.108-.166l-.032-.056-.03-.055c-.012-.02-.023-.042-.033-.063-.01-.017-.018-.034-.027-.052a3.25 3.25 0 01-.076-.175l-.021-.052a2.389 2.389 0 01-.027-.075l-.015-.044a2.847 2.847 0 01-.143-.891v-1.835h5.811v1.835a2.848 2.848 0 01-.184 1.008l-.026.064-.022.054a2.923 2.923 0 01-.051.113l-.022.044a2.408 2.408 0 01-.037.071l-.028.05a3.479 3.479 0 01-.102.167l-.039.057-.026.037a2.93 2.93 0 01-1.89 1.174h-.003zm11.077-5.848l-3.515-5.996.003-.051V.738A.742.742 0 0033.599 0H4.469a.742.742 0 00-.745.738v3.477L.097 10.527a.732.732 0 00-.092.449v2.49a4.34 4.34 0 001.877 3.567v15.229c0 .407.334.738.745.738h32.774c.412 0 .745-.33.745-.738V17.016A4.34 4.34 0 0038 13.466v-2.573a.73.73 0 00-.144-.435zM8.29 27.285h10.684v-6.18H8.29v6.18zm11.43-7.656H7.543a.742.742 0 00-.745.738v7.656c0 .408.334.739.745.739h12.174c.412 0 .745-.331.745-.739v-7.656a.742.742 0 00-.745-.738z"
        fill="#EF4507"
      />
    </svg>
  )
}

export default SvgStore