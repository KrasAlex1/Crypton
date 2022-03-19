- name: Get Organization Repositories
  id: get_org_repos
  uses: firenza/get-organization-repositories@v1
  with:
    github_token: ${{ secrets.YOUR_GITHUB_TOKEN }}
    organization: 'actions'

- name: Show org repos
  shell: bash
  run: echo ${{ steps.get_org_repos.outputs.repositories_json }}
