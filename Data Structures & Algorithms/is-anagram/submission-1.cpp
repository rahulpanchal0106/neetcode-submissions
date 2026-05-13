class Solution {
public:
    bool isAnagram(string s, string t) {
        map<char,int> sMap;
        map<char,int> tMap;

        if(s.size()!=t.size()) return false;
        if(s==t) return true;

        for(char c:s){
            sMap[c]++;
        }
        for(char c:t){
            tMap[c]++;
        }

        for(char c:s){
            if(sMap[c]!=tMap[c]){
                return false;
            }
        }
        return true;
    }
};
