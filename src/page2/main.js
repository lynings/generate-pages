if(ENV == 'DEV') {
	require('pages/views/page2.html')
}

import 'src/common/base.css'
import './style.css'
import common from 'src/common'

console.log('this is page2')
console.log(common())