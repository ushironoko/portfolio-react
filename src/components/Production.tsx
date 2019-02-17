import * as React from 'react'
import Typography from '@material-ui/core/Typography'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

const styles = (theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing.unit
    }
  })

type ClassNames = typeof styles

const Production = withStyles(styles)((props: WithStyles<ClassNames>) => {
  return (
    <>
      <a href="https://github.com/ushironoko/a-Go" target="_blank" rel="noopener">
        https://github.com/ushironoko/a-Go</a>

      <Typography noWrap>
        {`
          Goからrtmp形式のストリーミングラジオを録画するCLIツール。
        `}
      </Typography>

      <br />

      <a href="https://million-livesimulation-analyzer.netlify.com/" target="_blank" rel="noopener">
      https://million-livesimulation-analyzer.netlify.com/</a>

      <Typography noWrap>
        {`
          Nuxt製のミリシタスコア計算機
        `}
      </Typography>

      <br />

      <a href="https://github.com/ushironoko/millionlive-mmliverepo-ocr-template" target="_blank" rel="noopener">
      https://github.com/ushironoko/millionlive-mmliverepo-ocr-template</a>

      <Typography noWrap>
        {`
          Twitterの検索結果から特定の画像を読み込んでOCRに通すツール
        `}
      </Typography>

      <br/>

      <a href="https://github.com/ushironoko/millionlive-lounge-egosearch-server" target="_blank" rel="noopener">
      https://github.com/ushironoko/millionlive-lounge-egosearch-server</a>

      <Typography noWrap>
        {`
          Elasticsearchにため込んだTwitterの検索結果を特定の形に整形してdiscordへ送信するツール
        `}
      </Typography>

      <br/>

      <a href="https://ushironoko-dev-blog.me/" target="_blank" rel="noopener">
      https://ushironoko-dev-blog.me/</a>

      <Typography noWrap>
        {`
          Nuxt.js + Contentful + Netlify で作ったJAMstackなブログ
        `}
      </Typography>
    </>
  )
})

export default withRoot(withStyles(styles)(Production))
